import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec6Bp04Page() {
  return (
    <article className="doc-content">
      <h1>SEC06-BP04 — 소프트웨어 무결성 검증</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 변조된 소프트웨어나 악성 아티팩트가 컴퓨팅 환경에 진입할 수 있습니다.</p>
      </div>
      <p>
        모든 아티팩트를 신뢰할 수 있는 소스에서 획득합니다. 벤더 웹사이트 인증서를 검증하고, 다운로드된 아티팩트를 서명으로 암호화 검증합니다. 자체 소프트웨어를 암호화 서명하고 컴퓨팅 환경에서 검증합니다.
      </p>
      <h2>원하는 결과</h2>
      <ul>
        <li>모든 아티팩트를 신뢰할 수 있는 소스에서 획득</li>
        <li>벤더 웹사이트 인증서 검증</li>
        <li>다운로드된 아티팩트를 서명으로 암호화 검증</li>
        <li>자체 소프트웨어를 암호화 서명하고 컴퓨팅 환경에서 검증</li>
      </ul>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>평판 있는 벤더 웹사이트를 신뢰하지만 인증서 만료 알림을 무시하고 인증서 유효성을 확인하지 않고 다운로드 진행</li>
        <li>벤더 웹사이트 인증서를 검증하지만 다운로드된 아티팩트를 암호화 검증하지 않음</li>
        <li>소프트웨어 무결성 검증을 위해 다이제스트 또는 해시에만 의존(해시는 변조 여부를 검증하지만 출처/출처를 검증하지 않음)</li>
        <li>자체 배포에서만 사용하더라도 자체 소프트웨어, 코드 또는 라이브러리에 서명하지 않음</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>아티팩트 무결성을 검증하여 악성코드가 컴퓨팅 환경에 진입하는 것을 방지</li>
        <li>서명을 통해 컴퓨팅 환경에서 비인가 소프트웨어 실행 방지</li>
        <li>코드 서명 및 검증으로 소프트웨어 공급망 보안</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>해시와 디지털 서명의 차이를 이해합니다: 해시는 무결성을 검증하지만 출처는 검증하지 않으며, 디지털 서명은 아티팩트가 변조되지 않았고 신뢰할 수 있는 소스에서 왔다는 것을 모두 검증합니다.</li>
        <li>공급자로부터 공개 키를 획득하고 검증합니다(예: EC2 Image Builder의 AWSTOE 설치 다운로드 서명, AWS Systems Manager의 SSM Agent 서명, Amazon CloudWatch 에이전트 패키지 서명 검증).</li>
        <li>이미지 강화 프로세스에 디지털 서명 검증을 통합합니다(SEC06-BP02 참조).</li>
        <li>AWS Signer를 사용하여 서명 검증을 관리하고, 자체 소프트웨어/아티팩트의 코드 서명 수명 주기를 처리하며, 자동 검증을 위해 Lambda 및 Amazon ECR과 통합합니다.</li>
        <li>CI/CD 파이프라인에 Signer 통합을 사용하여 검증을 자동화합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Signer — 코드 서명 및 서명 관리</li>
        <li>AWS Lambda — 코드 서명 통합</li>
        <li>Amazon ECR — 컨테이너 이미지 서명</li>
        <li>AWS Certificate Manager — 인증서 관리</li>
        <li>AWS Key Management Service(KMS) — 암호화 키 관리</li>
        <li>AWS CodeArtifact — 아티팩트 저장소 관리</li>
      </ul>
      <PageNav />
    </article>
  );
}
