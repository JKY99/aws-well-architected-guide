import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSus3Bp02Page() {
  return (
    <article className="doc-content">
      <h1>SUS03-BP02 — 오래된 리소스를 제거하기 위한 코드 리팩터링</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>사용하지 않는 코드, 라이브러리, 기능을 제거하여 컴퓨팅 오버헤드를 줄입니다. 불필요한 코드는 CPU 사이클, 메모리, 스토리지를 낭비하며 불필요한 에너지를 소비합니다. 정기적인 코드 리팩터링을 통해 소프트웨어를 간결하게 유지하면 에너지 효율성과 성능이 동시에 개선됩니다.</p>
      <h2>원하는 결과</h2>
      <p>코드베이스에서 불필요한 의존성, 사용하지 않는 기능, 레거시 코드를 제거하여 애플리케이션이 최소한의 컴퓨팅 리소스로 동작하도록 최적화합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>사용하지 않는 라이브러리와 의존성을 제거하지 않고 그대로 배포합니다.</li>
        <li>더 이상 호출되지 않는 API 엔드포인트와 기능을 유지합니다.</li>
        <li>레거시 코드 경로를 "혹시 필요할 수 있다"는 이유로 계속 실행합니다.</li>
        <li>코드 품질 검토 없이 기술 부채를 계속 누적합니다.</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>애플리케이션 실행에 필요한 CPU와 메모리가 감소하여 에너지 소비가 줄어듭니다.</li>
        <li>배포 패키지가 작아져 빌드 및 배포 시간과 에너지가 절약됩니다.</li>
        <li>코드 유지보수성이 향상되고 버그 발생 가능성이 감소합니다.</li>
        <li>콜드 스타트 시간이 단축되고 전반적인 성능이 개선됩니다.</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS X-Ray나 Amazon CloudWatch로 실제 사용되는 코드 경로를 프로파일링합니다.</li>
        <li>정기적인 의존성 감사를 통해 미사용 패키지를 식별하고 제거합니다.</li>
        <li>기능 플래그를 활용하여 사용하지 않는 기능을 안전하게 비활성화하고 제거합니다.</li>
        <li>Lambda 함수의 경우 레이어와 배포 패키지 크기를 최소화합니다.</li>
        <li>CI/CD 파이프라인에 코드 분석 도구를 통합하여 불필요한 코드를 자동으로 감지합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS X-Ray — 애플리케이션 성능 분석 및 코드 경로 추적</li>
        <li>Amazon CodeGuru Profiler — 코드 효율성 분석 및 개선 권고</li>
        <li>AWS Lambda — 함수 크기 및 실행 시간 최적화</li>
        <li>Amazon CloudWatch — 리소스 사용 패턴 모니터링</li>
      </ul>
      <PageNav />
    </article>
  );
}
