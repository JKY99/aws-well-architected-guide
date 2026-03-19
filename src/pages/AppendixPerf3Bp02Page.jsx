import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixPerf3Bp02Page() {
  return (
    <article className="doc-content">
      <h1>PERF03-BP02 — 액세스 패턴 평가</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>읽기/쓰기 비율, 랜덤/순차 액세스, 액세스 빈도를 분석하여 이에 최적화된 스토리지 서비스와 구성을 선택합니다.</p>
      <h2>원하는 결과</h2>
      <p>실제 액세스 패턴에 최적화된 스토리지 구성으로 성능을 극대화하고 불필요한 비용을 제거합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>액세스 패턴 분석 없이 기본 설정 사용</li>
        <li>읽기/쓰기 비율을 고려하지 않은 스토리지 구성</li>
        <li>핫 데이터와 콜드 데이터를 동일한 스토리지에 혼합 저장</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>실제 액세스 패턴에 맞는 I/O 성능 최적화</li>
        <li>불필요한 I/O 요청 감소로 지연 시간 단축</li>
        <li>액세스 빈도 기반 스토리지 계층화로 비용 효율성 향상</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>Amazon CloudWatch I/O 메트릭으로 읽기/쓰기 패턴 분석</li>
        <li>워크로드 특성에 맞는 EBS 볼륨 유형 선택(gp3, io2 등)</li>
        <li>액세스 빈도가 불규칙한 데이터에 S3 Intelligent-Tiering 적용</li>
        <li>읽기 집약적 워크로드에 캐싱 계층 추가 검토</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon EBS</li>
        <li>Amazon S3 Intelligent-Tiering</li>
        <li>Amazon ElastiCache</li>
        <li>Amazon CloudWatch</li>
      </ul>
      <PageNav />
    </article>
  );
}
