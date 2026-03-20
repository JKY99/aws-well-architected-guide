import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel5Bp05Page() {
  return (
    <article className="doc-content">
      <h1>REL05-BP05 — 클라이언트 타임아웃 설정</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 수립하지 않으면 높은 수준의 위험이 노출됩니다.</p>
      </div>
      <p>
        클라이언트 타임아웃은 비정상적으로 오랜 시간이 걸리는 요청을 기다리는 것과 관련된 클라이언트, 서버
        및 워크로드에 대한 비용을 고려해야 합니다. 클라이언트는 서비스에 대한 지식을 사용하여 가능한 원인과
        적절한 타임아웃에 대한 기대를 개발해야 합니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        원격 호출 타임아웃이 구성되고 시스템이 타임아웃을 정상적으로 처리하도록 설계됩니다.
        원격 호출이 비정상적으로 느리게 응답할 때 리소스가 보존됩니다.
        타임아웃 오류가 서비스 클라이언트에 의해 정상적으로 처리됩니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>시스템 타임아웃 또는 기본 타임아웃 인식 부족</li>
        <li>정상 요청 완료 타이밍 인식 부족</li>
        <li>요청이 비정상적으로 오래 걸리는 가능한 원인이나 대기 비용 인식 부족</li>
        <li>타임아웃 시나리오(연결 및 요청 모두)를 테스트하지 않음</li>
        <li>타임아웃을 너무 높게 설정하여 긴 대기 시간 및 리소스 사용률 증가</li>
        <li>타임아웃을 너무 낮게 설정하여 인위적인 실패 발생</li>
        <li>서킷 브레이커 및 재시도와 같은 원격 호출 처리 패턴 간과</li>
        <li>서비스 호출 오류율, 지연 시간 SLO 및 지연 시간 이상값에 대한 모니터링 미고려</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>원격 호출 타임아웃이 구성되고 시스템이 타임아웃을 정상적으로 처리</li>
        <li>원격 호출이 비정상적으로 느리게 응답할 때 리소스 보존</li>
        <li>타임아웃 오류가 서비스 클라이언트에 의해 정상적으로 처리됨</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>서비스 의존성 호출 및 교차 프로세스 호출 모두에 연결 타임아웃과 요청 타임아웃 설정</li>
        <li>프레임워크의 내장 타임아웃 기능 사용(기본값이 무한이나 허용할 수 없는 값인지 확인)</li>
        <li>잘 확립된 설계 패턴 구현: 재시도, 서킷 브레이커, 지수 백오프 및 지터</li>
        <li>Lambda 함수에 타임아웃 구성</li>
        <li>컨테이너 워크로드의 경우 내장 타임아웃 및 서킷 브레이커 기능을 위한 AWS App Mesh Envoy 활용</li>
        <li>AWS Step Functions를 사용하여 코드가 적은 서킷 브레이커 구축</li>
        <li>타임아웃에 대한 원격 서비스 호출 모니터링 및 지속적인 오류에 대한 알람 설정</li>
        <li>AWS 구성 기본값 사용: connectTimeoutInMillis 및 tlsNegotiationTimeoutInMillis</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS SDK (모든 언어)</li>
        <li>AWS Lambda</li>
        <li>Amazon SQS</li>
        <li>AWS Step Functions</li>
        <li>AWS App Mesh (Envoy)</li>
        <li>Amazon API Gateway</li>
        <li>Amazon CloudWatch</li>
      </ul>
      <PageNav />
    </article>
  );
}
