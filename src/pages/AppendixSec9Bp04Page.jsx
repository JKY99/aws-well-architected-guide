import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec9Bp04Page() {
  return (
    <article className="doc-content">
      <h1>SEC09-BP04 — 전송 데이터 인증</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>
        데이터 전송의 양 끝단(발신자와 수신자)을 모두 인증하여 중간자 공격과 서비스 위장 공격을
        방지합니다. TLS 서버 인증에 더해 클라이언트 인증(mTLS), AWS Signature Version 4(SigV4)
        서명, API Gateway 인증자를 활용하여 전송 중 데이터의 출처를 검증합니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        모든 서비스 간 통신에서 발신자와 수신자 모두 인증됩니다. AWS API 호출은 SigV4로 서명되어
        요청자의 신원과 요청 무결성이 검증됩니다. 외부 클라이언트는 API Gateway 또는 ALB에서
        인증 후 백엔드 서비스에 접근합니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>TLS 서버 인증만 사용하고 클라이언트 인증(mTLS)을 적용하지 않아 클라이언트 신원 미검증</li>
        <li>내부 서비스 간 API 호출에 인증 없이 IP 주소만으로 신뢰함</li>
        <li>API Gateway에 인증자 없이 백엔드 서비스를 인터넷에 직접 노출함</li>
        <li>AWS SDK 외부에서 직접 구현한 서명 코드에 버그가 있어 서명 검증이 우회됨</li>
        <li>인증 토큰이나 API 키를 로그에 기록하거나 URL 쿼리 파라미터로 전달함</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>mTLS로 클라이언트와 서버 모두 인증하여 양방향 신원 검증 보장</li>
        <li>SigV4 서명으로 AWS API 요청의 출처와 무결성을 검증하여 재전송 공격 방지</li>
        <li>API Gateway 인증자로 백엔드 서비스를 인증된 클라이언트에만 노출</li>
        <li>서비스 위장 공격(서비스 A가 서비스 B인 척 하는 공격)을 인증서 기반으로 방지</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>Amazon API Gateway에 Lambda 인증자 또는 Cognito 사용자 풀 인증자를 구성하여 JWT 토큰이나 API 키를 검증한 후 백엔드에 요청을 전달합니다.</li>
        <li>마이크로서비스 간 통신에 mTLS를 적용하고, ACM Private CA에서 발급한 클라이언트 인증서를 사용하여 각 서비스의 신원을 검증합니다.</li>
        <li>AWS SDK를 사용하여 모든 AWS API 호출에 SigV4 서명을 자동으로 적용하고, IAM 역할 기반 인증으로 자격 증명을 관리합니다.</li>
        <li>ALB에서 mTLS를 활성화하여 클라이언트 인증서를 검증하고, 검증된 클라이언트 정보를 HTTP 헤더로 백엔드에 전달합니다.</li>
        <li>Amazon Cognito 또는 AWS IAM Identity Center를 사용하여 외부 사용자와 서비스의 인증을 중앙에서 관리합니다.</li>
        <li>API 요청에 HMAC 서명 또는 SigV4를 적용하여 전송 중 변조 여부를 수신 측에서 검증합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon API Gateway Lambda 인증자 — API 요청 사용자 정의 인증</li>
        <li>AWS Certificate Manager Private CA — mTLS용 클라이언트 인증서 발급</li>
        <li>AWS IAM SigV4 — AWS API 호출 서명 및 인증</li>
        <li>Amazon Cognito — 외부 사용자 및 서비스 인증 관리</li>
        <li>AWS ALB mTLS — 로드 밸런서 수준 클라이언트 인증서 검증</li>
      </ul>
      <PageNav />
    </article>
  );
}
