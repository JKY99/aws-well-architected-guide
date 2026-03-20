import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel6Bp07Page() {
  return (
    <article className="doc-content">
      <h1>REL06-BP07 — 시스템을 통한 요청의 엔드투엔드 추적 모니터링</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 수립하지 않으면 중간 수준의 위험이 노출됩니다.</p>
      </div>
      <p>
        모든 구성 요소에 걸쳐 포괄적인 추적을 구현하면 오류 및 지연 시간의 근본 원인 발견을 단순화하여
        평균 복구 시간(MTTR)을 개선합니다. 엔드투엔드 추적을 통해 영향받는 구성 요소를 발견하고
        오류나 지연 시간의 세부 근본 원인을 파악하는 데 소요되는 시간을 단축합니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        모든 구성 요소에 걸쳐 포괄적인 추적이 구현된 워크로드는 디버그하기 쉬워 오류 및 지연 시간의
        근본 원인 발견을 단순화하여 MTTR을 개선합니다.
        엔드투엔드 추적을 통해 영향받는 구성 요소를 발견하고 오류나 지연 시간의 세부 근본 원인을 파악하는 시간을 단축합니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>불완전한 커버리지: 일부 구성 요소에만 추적을 사용하고 다른 구성 요소는 누락(예: Lambda 추적 누락으로 급등하는 워크로드에서 콜드 스타트 지연 문제 미감지)</li>
        <li>클라이언트 측 원격 측정 누락: 합성 카나리 또는 실제 사용자 모니터링(RUM)에 추적이 구성되지 않아 추적 분석에서 클라이언트 상호 작용 원격 측정 데이터 제외</li>
        <li>도구 파편화: 하이브리드 워크로드에서 클라우드 네이티브 및 서드파티 추적 도구를 완전한 통합 없이 혼합하여 일관성 없는 관측 가능성 초래</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>전체 시스템 가시성: 개발 팀이 시스템 구성 요소 상호 작용의 완전한 그림 파악</li>
        <li>상관 관계 통합: 구성 요소별 로깅, 성능 및 장애에 대한 상관 관계</li>
        <li>빠른 근본 원인 분석: 근본 원인의 시각적 식별로 조사 시간 단축</li>
        <li>정보에 입각한 의사결정: 구성 요소 상호 작용에 대한 더 나은 이해로 해결 결정(예: DR 장애 조치, 자가 치유 전략) 개선</li>
        <li>고객 만족도 향상: 추적을 통한 시스템 분석으로 더 빠른 문제 해결</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>지원되는 서비스에서 X-Ray 활성화: Amazon S3, AWS Lambda, Amazon API Gateway에서 구성 토글 사용, 인프라스트럭처 코드, AWS SDK 또는 AWS 관리 콘솔을 통해 배포</li>
        <li>애플리케이션 계측: AWS Distro for OpenTelemetry와 X-Ray 사용, 또는 서드파티 수집 에이전트 배포</li>
        <li>언어별 구현: HTTP 요청, SQL 쿼리, 언어별 프로세스에 대한 X-Ray 개발자 가이드 참조</li>
        <li>합성 및 RUM 추적 구성: CloudWatch Synthetic Canaries와 CloudWatch RUM에 X-Ray 활성화하여 최종 사용자 클라이언트에서 AWS 인프라를 통한 요청 경로 분석</li>
        <li>경보 구성: 리소스 상태 및 카나리 원격 측정을 기반으로 CloudWatch 메트릭 및 경보 생성, ServiceLens를 사용하여 추적 심층 분석</li>
        <li>서비스 맵 추적 범위에 모든 구성 요소 포함: 서비스 클라이언트, 미들웨어 게이트웨이 및 이벤트 버스, 컴퓨팅 구성 요소, 스토리지, 합성 카나리, RUM</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS X-Ray (기본 추적 서비스)</li>
        <li>Amazon CloudWatch ServiceLens (추적, 메트릭, 로그, 경보 통합 뷰)</li>
        <li>Amazon CloudWatch Synthetics (엔드포인트 및 API 모니터링)</li>
        <li>Amazon CloudWatch RUM (웹 애플리케이션 클라이언트 계측)</li>
        <li>AWS Distro for OpenTelemetry (오픈 표준 계측)</li>
        <li>Amazon Route 53 (상태 확인 및 DNS 모니터링)</li>
      </ul>
      <PageNav />
    </article>
  );
}
